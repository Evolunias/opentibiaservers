import TibiaPrivateServerHighExpKeywordPage, { generateMetadata } from './tibia-private-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerHighExpKeywordPage />;
}
