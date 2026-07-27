import MediviaHighExpServerFranceKeywordPage, { generateMetadata } from './medivia-high-exp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaHighExpServerFranceKeywordPage />;
}
