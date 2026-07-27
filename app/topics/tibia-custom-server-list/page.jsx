import TibiaCustomServerListKeywordPage, { generateMetadata } from './tibia-custom-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerListKeywordPage />;
}
