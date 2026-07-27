import TibiaCustomServerPolandKeywordPage, { generateMetadata } from './tibia-custom-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerPolandKeywordPage />;
}
