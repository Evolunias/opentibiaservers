import HarmoniaOt15LowExpServerKeywordPage, { generateMetadata } from './harmonia-ot-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt15LowExpServerKeywordPage />;
}
