import ActiveShadowcoresTibiaKeywordPage, { generateMetadata } from './active-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresTibiaKeywordPage />;
}
