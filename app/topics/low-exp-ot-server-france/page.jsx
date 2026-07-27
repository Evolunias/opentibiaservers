import LowExpOtServerFranceKeywordPage, { generateMetadata } from './low-exp-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerFranceKeywordPage />;
}
