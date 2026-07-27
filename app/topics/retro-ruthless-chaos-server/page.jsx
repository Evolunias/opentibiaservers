import RetroRuthlessChaosServerKeywordPage, { generateMetadata } from './retro-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRuthlessChaosServerKeywordPage />;
}
