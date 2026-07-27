import TibiaCustomServerKeywordPage, { generateMetadata } from './tibia-custom-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerKeywordPage />;
}
