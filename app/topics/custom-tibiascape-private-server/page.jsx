import CustomTibiascapePrivateServerKeywordPage, { generateMetadata } from './custom-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapePrivateServerKeywordPage />;
}
