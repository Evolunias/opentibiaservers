import NewInfernalOtPrivateServerKeywordPage, { generateMetadata } from './new-infernal-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtPrivateServerKeywordPage />;
}
