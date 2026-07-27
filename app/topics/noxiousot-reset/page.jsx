import NoxiousotResetKeywordPage, { generateMetadata } from './noxiousot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotResetKeywordPage />;
}
