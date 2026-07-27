import NoxiousotRetroServerPolandKeywordPage, { generateMetadata } from './noxiousot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotRetroServerPolandKeywordPage />;
}
