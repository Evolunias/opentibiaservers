import TibiaCustomServerActiveKeywordPage, { generateMetadata } from './tibia-custom-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerActiveKeywordPage />;
}
