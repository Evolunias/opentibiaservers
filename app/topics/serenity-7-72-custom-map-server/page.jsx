import Serenity772CustomMapServerKeywordPage, { generateMetadata } from './serenity-7-72-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity772CustomMapServerKeywordPage />;
}
