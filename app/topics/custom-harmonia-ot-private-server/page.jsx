import CustomHarmoniaOtPrivateServerKeywordPage, { generateMetadata } from './custom-harmonia-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtPrivateServerKeywordPage />;
}
