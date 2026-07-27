import TibiaHighExpServerActiveKeywordPage, { generateMetadata } from './tibia-high-exp-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerActiveKeywordPage />;
}
