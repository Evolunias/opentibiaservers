import NonPvpServersUkKeywordPage, { generateMetadata } from './non-pvp-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersUkKeywordPage />;
}
