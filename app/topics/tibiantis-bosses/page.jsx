import TibiantisBossesKeywordPage, { generateMetadata } from './tibiantis-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBossesKeywordPage />;
}
