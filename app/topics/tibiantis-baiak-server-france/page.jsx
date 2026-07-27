import TibiantisBaiakServerFranceKeywordPage, { generateMetadata } from './tibiantis-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBaiakServerFranceKeywordPage />;
}
