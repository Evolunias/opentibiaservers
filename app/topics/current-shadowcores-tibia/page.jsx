import CurrentShadowcoresTibiaKeywordPage, { generateMetadata } from './current-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresTibiaKeywordPage />;
}
