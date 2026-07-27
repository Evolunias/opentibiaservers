import HarmoniaOt12NoResetServerKeywordPage, { generateMetadata } from './harmonia-ot-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt12NoResetServerKeywordPage />;
}
