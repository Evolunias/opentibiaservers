import CustomAureraGlobalPrivateServerKeywordPage, { generateMetadata } from './custom-aurera-global-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAureraGlobalPrivateServerKeywordPage />;
}
