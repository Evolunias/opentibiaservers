import CustomMapSerenityServerKeywordPage, { generateMetadata } from './custom-map-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSerenityServerKeywordPage />;
}
