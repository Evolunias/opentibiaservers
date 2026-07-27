import CustomYurotsPrivateServerKeywordPage, { generateMetadata } from './custom-yurots-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsPrivateServerKeywordPage />;
}
