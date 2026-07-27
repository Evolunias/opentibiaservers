import RealeraBossesKeywordPage, { generateMetadata } from './realera-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraBossesKeywordPage />;
}
