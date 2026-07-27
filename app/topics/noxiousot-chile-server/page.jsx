import NoxiousotChileServerKeywordPage, { generateMetadata } from './noxiousot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotChileServerKeywordPage />;
}
