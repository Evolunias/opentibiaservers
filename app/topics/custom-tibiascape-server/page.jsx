import CustomTibiascapeServerKeywordPage, { generateMetadata } from './custom-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeServerKeywordPage />;
}
