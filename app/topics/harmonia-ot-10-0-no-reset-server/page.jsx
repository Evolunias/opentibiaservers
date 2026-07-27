import HarmoniaOt100NoResetServerKeywordPage, { generateMetadata } from './harmonia-ot-10-0-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOt100NoResetServerKeywordPage />;
}
