import CustomInfernalOtPrivateServerKeywordPage, { generateMetadata } from './custom-infernal-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtPrivateServerKeywordPage />;
}
