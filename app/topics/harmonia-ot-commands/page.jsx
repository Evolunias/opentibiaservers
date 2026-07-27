import HarmoniaOtCommandsKeywordPage, { generateMetadata } from './harmonia-ot-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtCommandsKeywordPage />;
}
