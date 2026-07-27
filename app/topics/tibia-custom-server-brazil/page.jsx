import TibiaCustomServerBrazilKeywordPage, { generateMetadata } from './tibia-custom-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerBrazilKeywordPage />;
}
