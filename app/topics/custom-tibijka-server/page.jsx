import CustomTibijkaServerKeywordPage, { generateMetadata } from './custom-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaServerKeywordPage />;
}
