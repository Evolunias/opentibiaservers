import ActiveInfernalOtPrivateServerKeywordPage, { generateMetadata } from './active-infernal-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtPrivateServerKeywordPage />;
}
