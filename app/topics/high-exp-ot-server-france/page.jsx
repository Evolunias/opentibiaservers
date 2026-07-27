import HighExpOtServerFranceKeywordPage, { generateMetadata } from './high-exp-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpOtServerFranceKeywordPage />;
}
