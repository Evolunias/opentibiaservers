import TibiaCustomServerUsaKeywordPage, { generateMetadata } from './tibia-custom-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerUsaKeywordPage />;
}
