import BestShadowcoresTibiaKeywordPage, { generateMetadata } from './best-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresTibiaKeywordPage />;
}
