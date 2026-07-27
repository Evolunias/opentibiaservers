import CustomMapThorniaServerKeywordPage, { generateMetadata } from './custom-map-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapThorniaServerKeywordPage />;
}
