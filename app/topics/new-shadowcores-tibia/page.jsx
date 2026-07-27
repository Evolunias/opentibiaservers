import NewShadowcoresTibiaKeywordPage, { generateMetadata } from './new-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresTibiaKeywordPage />;
}
