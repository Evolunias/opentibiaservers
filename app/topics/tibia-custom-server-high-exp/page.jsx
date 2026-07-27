import TibiaCustomServerHighExpKeywordPage, { generateMetadata } from './tibia-custom-server-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerHighExpKeywordPage />;
}
