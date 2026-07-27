import PopularSerenityPrivateServerKeywordPage, { generateMetadata } from './popular-serenity-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityPrivateServerKeywordPage />;
}
