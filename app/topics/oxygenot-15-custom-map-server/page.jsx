import Oxygenot15CustomMapServerKeywordPage, { generateMetadata } from './oxygenot-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15CustomMapServerKeywordPage />;
}
