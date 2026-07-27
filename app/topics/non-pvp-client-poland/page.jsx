import NonPvpClientPolandKeywordPage, { generateMetadata } from './non-pvp-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientPolandKeywordPage />;
}
