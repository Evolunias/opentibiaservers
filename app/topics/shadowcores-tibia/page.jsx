import ShadowcoresTibiaKeywordPage, { generateMetadata } from './shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresTibiaKeywordPage />;
}
