import BlazeraRetroServerFranceKeywordPage, { generateMetadata } from './blazera-retro-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerFranceKeywordPage />;
}
