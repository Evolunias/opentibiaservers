import Tibia74RetroServerKeywordPage, { generateMetadata } from './tibia-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroServerKeywordPage />;
}
