import NoResetShadowcoresTibiaKeywordPage, { generateMetadata } from './no-reset-shadowcores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresTibiaKeywordPage />;
}
