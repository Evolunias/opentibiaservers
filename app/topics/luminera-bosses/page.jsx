import LumineraBossesKeywordPage, { generateMetadata } from './luminera-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraBossesKeywordPage />;
}
