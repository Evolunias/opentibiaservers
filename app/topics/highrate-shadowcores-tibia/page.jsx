import HighrateShadowcoresTibiaKeywordPage, { generateMetadata } from './highrate-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresTibiaKeywordPage />;
}
