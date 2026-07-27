import NonPvpServerPolandKeywordPage, { generateMetadata } from './non-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerPolandKeywordPage />;
}
