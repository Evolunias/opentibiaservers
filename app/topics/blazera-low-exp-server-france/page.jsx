import BlazeraLowExpServerFranceKeywordPage, { generateMetadata } from './blazera-low-exp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraLowExpServerFranceKeywordPage />;
}
