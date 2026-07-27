import Oxygenot12CustomMapServerKeywordPage, { generateMetadata } from './oxygenot-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12CustomMapServerKeywordPage />;
}
