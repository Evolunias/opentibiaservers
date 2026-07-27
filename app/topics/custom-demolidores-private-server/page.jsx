import CustomDemolidoresPrivateServerKeywordPage, { generateMetadata } from './custom-demolidores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresPrivateServerKeywordPage />;
}
